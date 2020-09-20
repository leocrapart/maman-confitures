import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref } from 'vue'
const config = {
	apiKey: "AIzaSyCh9o9Gg67rZzrg8w0HR8Ymb2iE5K2KD2o",
    authDomain: "valerie-confiture.firebaseapp.com",
    databaseURL: "https://valerie-confiture.firebaseio.com",
    projectId: "valerie-confiture",
    storageBucket: "valerie-confiture.appspot.com",
    messagingSenderId: "661413196516",
    appId: "1:661413196516:web:95717cbdff7e5c199632f1"
}


firebase.initializeApp(config)

const db = firebase.firestore()

export function getProducts() {
	const products = ref([])
	db.collection('products').get()
		.then(snap => {
			snap.forEach(doc => {
				products.value.push(doc.data())
			})
		})
	return products
}

export function getProductByUrl(url) {
	const product = ref({})
	db.collection('products').where('url', '==', url).limit(1).get()
		.then(snap => {
			snap.forEach(doc => {
				product.value = doc.data()
			})
		})

	return product
}

export function addProduct(product) {
	db.collection('products').add(product)
}

export function updateProductByUrl(newProduct, url) {
	db.collection('products').where('url', '==', url)
		.limit(1).get()
		.then(snap => {
			snap.forEach(doc => {
				const id = doc.id
				db.collection('products').doc(id).set(newProduct)

			})
		})
}

export function deleteProductByUrl(url) {
	db.collection('products').where('url', '==', url)
		.limit(1).get()
		.then(snap => {
			snap.forEach(doc => {
				const id = doc.id
				db.collection('products').doc(id).delete()
			})
		})
}