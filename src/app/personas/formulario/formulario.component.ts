import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput:string;
  index:number;
 
  constructor(private loggingService:LoggingService,
    private router:Router,
    private personaService:PersonasService,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
      this.index=this.route.snapshot.params['id'];
      if(this.index){
        let persona:Persona = this.personaService.encontrarPersona(this.index);
        this.nombreInput=persona.nombre;
        this.apellidoInput = persona.apellido;
      }
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //! si el index existe estamos en modo de edición!
    if(this.index){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    //this.loggingService.enviaMensajeAConsola('Enviamos persona con nombre:' + persona1.nombre + ', apellido:' + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.router.navigate(['']);
  }

  eliminarPersona(){
    if(this.index){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['']);
  }

}
