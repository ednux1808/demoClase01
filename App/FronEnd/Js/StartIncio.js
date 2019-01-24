/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function home (){
     
     let home = document.getElementById('homeContenido');
     home.style.display="block";
     let login = document.getElementById('loginCotenido');
     login.style.display="none";
     
     
 }
 
 function login (){
     
     let home = document.getElementById('homeContenido');
     home.style.display = "none";
     let login = document.getElementById('loginContenido');
     login.style.display="block";
     
 }

