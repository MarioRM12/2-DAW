import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService, Producto, Categoria, Usuario } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // prueba:Producto[]=[{id:1,nombre:"uno",precio:44.0,categoria:1},
  //   {id:2,nombre:"dos",precio:55.0,categoria:1},
  //   {id:3,nombre:"tres",precio:66.0,categoria:1},
  //   {id:4,nombre:"cuatro",precio:77.0,categoria:1},
  // ]

  // pruebaSin2():Producto[] {
  //   this.prueba=[...this.prueba.filter(x => x.id!=2)];
  //   return this.prueba;
  // }

  productos:Producto[]=[];
  categorias: Categoria[]=[];
  usuarios: Usuario[]=[];

  verAviso:Boolean = false;
  aviso:string = "";

  constructor(private appService:AppService) {
    
  }

  reset(){
    this.productos=[];
    this.categorias=[];
    this.usuarios=[];
  }

  /************** PRODUCTOS **************/
  getProductos() {
    this.appService.getProductos().subscribe({
      next: (data) => {
        this.productos= (data as Producto[])},
      error: (error) => {
        //console.error(error);
        this.setAviso("Error de conexión al servidor.")
      } 
    });
  }

  getProductosDesde(precio:number) {
    this.appService.getProductosDesde(precio).subscribe((data) =>
      this.productos= (data as any));
  }

  crearProducto(){
    let producto:Producto={
      id:99,
      nombre: "ejemplo",
      precio: 88.88,
      categoria: 1

    };
    // this.appService.crearProducto(producto).subscribe((data) =>
    //   console.log('crearProducto',data as Producto));

    this.appService.crearProducto(producto).subscribe({
      next: () => {
        console.log("producto creado: ", producto);
        this.productos.push(producto);
      },
      error: (error:HttpErrorResponse) => {
        let s:string;
        s=error.error
        s=s.substring(0,s.indexOf(' at '))
        this.setAviso(s);
        console.error(s, error.message);

      }});
  }

  updateProducto(p:Producto, precio:number) {
    if(precio>0){

      let copiaProducto = {...p};
      copiaProducto.precio = precio;
      this.appService.updateProducto(copiaProducto).subscribe({
        next: (data) =>
          p.precio = precio,
        error: error => {
          this.setAviso('Error: No se ha podido actualizar'); 
        }
        });
    }
  }

  eliminarProducto(p:Producto) {
    this.appService.deleteProducto(p.id).subscribe(
      {next: (() => {
        //console.log('eliminarProducto');
        this.quitarDeProductos(p);
        }),
      error:  ((error:any) => {
        //console.log('Error eliminar producto', error);
        this.setAviso('Error al eliminar producto.')
      })});
  }

  quitarDeProductos(p:Producto){
    this.productos=this.productos.filter(x => x.id!=p.id)
  }


  /************** CATEGORIAS **************/
  getCategorias() {
    this.appService.getCategorias().subscribe((data) =>
      this.categorias= (data as any));
  }

  updateCategoria(c:Categoria, nombre:string) {
    if(nombre!=""){
      let copiaCategoria = {...c};
      copiaCategoria.nombre = nombre;
      this.appService.updateCategoria(copiaCategoria).subscribe({
        next: (data) =>
          c.nombre = nombre,
        error: error => {
          this.setAviso('Error: No se ha podido actualizar'); 
        }
        });
    }
  }

  eliminarCategoria(c:Categoria) {
    this.appService.deleteCategoria(c.id).subscribe(
      {next: (() => {
        //console.log('eliminarCategoria');
        this.quitarDeCategorias(c);
        }),
      error:  ((error:any) => {
        //console.log('Error eliminar categoria', error);
        this.setAviso('Error al eliminar categoría.')
      })});
  }

  quitarDeCategorias(c:Categoria){
    this.categorias=this.categorias.filter(x => x.id!=c.id)
  }


  /************** USUARIOS **************/
  getUsuarios() {
    this.appService.getUsuarios().subscribe((data) =>
      this.usuarios= (data as any));
  }

  getUsuariosConResultados() {
    this.appService.getUsuariosConResultados().subscribe((data) =>
      this.usuarios= (data as any));
  }

  addResultado(u:Usuario, resultado:number) {
    if(resultado>0){
      let copiaUsuario = {...u};
      copiaUsuario.resultado.push(resultado);
      console.log("añadido resultado a copia interna: " + copiaUsuario.resultado);
      this.appService.updateUsuario(copiaUsuario).subscribe({
        next: (data) =>{
          u.resultado.push(resultado);
          //u.resultado = copiaUsuario.resultado;
          console.log("añadido resultado a BBDD: " + u.resultado)},
        error: error => {
          this.setAviso('Error: No se ha podido añadir el resultado'); 
        }
        });
    }
  }

  eliminarUsuario(u:Usuario) {
    this.appService.deleteUsuario(u.id).subscribe(
      {next: (() => {
        //console.log('eliminarUsuario');
        this.quitarDeUsuarios(u);
        }),
      error:  ((error:any) => {
        //console.log('Error eliminar usuario', error);
        this.setAviso('Error al eliminar usuario.')
      })});
  }

  quitarDeUsuarios(u:Usuario){
    this.usuarios=this.usuarios.filter(x => x.id!=u.id)
  }





  setAviso(texto:string){
    this.aviso=texto;
    setTimeout(()=> this.aviso="",2000);
  }

  // Función de parseo para pasar .value(string) a number
  miParseInt(s:string):number{
    return parseInt(s);
  }
}