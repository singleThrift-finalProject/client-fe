import { defineStore } from "pinia"
import axios from 'axios'

const baseUrl = "http://localhost:3000/admin"

export const useAppStore = defineStore('app', {
  state: () => ({
    products: [],
    users: [],
    categories: [],
    bannedUsers: [],
    detailProduct:{},
    isLogin: false,
    totalData: {},
    totalPage: 0,
    query: {},
    email:localStorage.email
  }),
  getters: {
    thisPath() {
      return this.$router.currentRoute.value.path
    }
  },
  actions: {
    async doLogin(form) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: form
        })
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)
        this.isLogin = true
        console.log(this.isLogin)
        console.log(data, `sksjsjsjsjsjsjjsjsjs DATA USER`)
        this.router.push('/')
        // console.log(localStorage)
      } catch (error) {
        console.log(error)
      }
    },
    async doRegister(form) {
      try {
        console.log(form, `//////////////`)
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/register`,
          data: form
        })
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    doLogout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem("email");
      this.router.replace('/login')
      this.isLogin = false
    },
    async getUsers(pagenum, categoryId) {
      try {
        if (pagenum) {
          this.query.page = {
            size: 9,
            number: pagenum
          }
        }
        if (categoryId) {
          this.query.filter = {
            category: categoryId
          }
        }
        // console.log(pagenum, categoryId)
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/users`,
          // params: this.query
        })
        console.log(data, "ini datanya,,,,,,,,")
        this.users = data;
        this.totalData.users = data.length
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts(pagenum, categoryId, search) {
      try {
        if (pagenum) {
          this.query.page = pagenum
        }
        if (categoryId) {
          this.query.filter = categoryId //number category
        }
        if (search) {
          this.query.search = search //by name
        }
        // console.log(pagenum, categoryId)
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/product`,
          params: this.query
        })
        console.log(data, `ini ini dataaaaa productsssss`)
        this.products = data.data;
        this.totalData.products = data.count
        // this.totalPage = data.
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async getCategories() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/category`
        })
        this.categories = data
        this.totalData.categories = data.length
        // console.log(this.categories)
        // console.log(this.totalData,`<<<<<<<<<<<<<<<<<<<<<<<<<`)
      } catch (error) {
        console.log(error)
      }
    },
    async addCategory(form) {
      try {
        console.log(productId, `iniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`)
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/categories`,
          data: form
          // headers: {
          //   access_token: localStorage.access_token
          // }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${baseUrl}/category/${categoryId}`,
          // headers: {
          //   access_token: localStorage.access_token
          // }
        })
        this.getCategories()
        // console.log(this.products.dataPost)
      } catch (error) {
        console.log(error)
      }
    },
    async getBannedUsers() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/banned`,
        })
        console.log(data, "ini datanya,,,,,,,,")
        this.bannedUsers = data;
        this.totalData.banned = data.length
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async patchStatusUser(status, userId){
      try {
        await axios({
          method: "PATCH",
          url: `${baseUrl}/users/${userId}`,
          data: { status: status },
          // headers: { access_token: localStorage.access_token },
        });
        this.getUsers();
        this.getBannedUsers();
      } catch (error) {
        console.log(error);
      }
    },
    async getDetailProduct(productId) {
      try {
          const { data } = await axios({
              method: "GET",
              url: `${baseUrl}/product/${productId}`,
              // headers: {
              //     access_token: localStorage.access_token
              // }
          })
          this.router.push('/products/details/' + productId)
          this.detailProduct = data
          console.log(this.detailProduct)
      } catch (error) {
          console.log(error)
      }
    },
    async deleteProduct(productId) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${baseUrl}/product/${productId}`,
        })
        this.getProducts()
        // console.log(this.products.dataPost)
      } catch (error) {
        console.log(error)
      }
    },
  }
})
