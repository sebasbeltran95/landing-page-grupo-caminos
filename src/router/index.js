import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoElectricosView from '../views/Vehiculos/Electricos/CatalogoElectricosView.vue'
import CatalogoCamionetasView from '../views/Vehiculos/Camionetas/CatalogoCamionetasView'
import CatalogoHibridosView from '../views/Vehiculos/Hibridos/CatalogoHibridosView'
import CatalogoPickupsView from '../views/Vehiculos/Pickups/CatalogoPickupsView'
import CatalogoCarrosView from '../views/Vehiculos/Carros/CatalogoCarrosView'
import CatalogoVansView from '../views/Vehiculos/Vans/CatalogoVansView'
import ModelosView from '../views/Modelos/ModelosView'
import SparkEuvView from '../views/Vehiculos/Electricos/SparkEuvView'
import CaptivaEvView from '../views/Vehiculos/Electricos/CaptivaEvView'
import EquinoxEv from '../views/Vehiculos/Electricos/EquinoxEv'
import BlazerEvView from '../views/Vehiculos/Electricos/BlazerEvView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalogo-electricos',
    name: 'catalogo-electricos',
    component: CatalogoElectricosView
  },
  {
    path: '/catalogo-camionetas',
    name: 'catalogo-camionetas',
    component: CatalogoCamionetasView
  },
  {
    path: '/catalogo-hibridos',
    name: 'catalogo-hibridos',
    component: CatalogoHibridosView
  },
  {
    path: '/catalogo-pickups',
    name: 'catalogo-pickups',
    component: CatalogoPickupsView
  },
  {
    path: '/catalogo-carros',
    name: 'catalogo-carros',
    component: CatalogoCarrosView
  },
  {
    path: '/catalogo-vans',
    name: 'catalogo-vans',
    component: CatalogoVansView
  },
  {
    path: '/modelos-view',
    name: 'modelos-view',
    component: ModelosView
  },
  {
    path: '/spark-euv',
    name: 'spark-euv',
    component: SparkEuvView
  },
  {
    path: '/captiva-ev',
    name: 'captiva-ev',
    component: CaptivaEvView
  },
  {
    path: '/equinox-ev',
    name: 'equinox-ev',
    component: EquinoxEv
  },
  {
    path: '/blazer-ev',
    name: 'blazer-ev',
    component: BlazerEvView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
