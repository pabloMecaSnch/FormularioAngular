import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  formulario:FormGroup;
  matchingPasswords: FormGroup;
  dniCompulsory: FormGroup;
  validation_messages={
    'nombreUsu':[
      {type:'required',message:'Nombre requerido'},
      {type:'minLenght',message:'Mínimo 3 caracteres'}
    ],
    'password':[
      {type:'required',message:'Contraseña requerida'}
    ],
    'matchingPasswords':[
      {type:'confiPass',message:'Deben coincidir las contraseñas'}
    ],
    'confiPass':[
      {type:'required',message:'Contraseña requerida'},
      {type:'minLenght',message:'Mínimo 5 caracteres'}
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    private navController: NavController
  ) {}

  ngOnInit(): void {

    this.matchingPasswords=  new FormGroup( 
      {
        password: new FormControl("",Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])),
        confiPass: new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ]))
      },
      (formGroup:FormGroup)=>{
        return this.confiPass(formGroup);
        }
    );
    this.dniCompulsory= new FormGroup(
      {
        DNI: new FormControl("",Validators.required),
        IBAN: new FormControl("",Validators.minLength(3))
      },(formGroup:FormGroup)=>{
        console.log(this.confiIBAN(formGroup));
        return this.confiIBAN(formGroup);
      }
    )

    this.formulario= this.formBuilder.group({
      nombreUsu: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      nombre: new FormControl("",Validators.required),
      matchingPasswords :this.matchingPasswords,
      dniCompulsory : this.dniCompulsory
    })
  }

  confiPass(fg:FormGroup){
    if(fg.controls['password'].value!=fg.controls['confiPass'].value)
      return({confiPass:true});
    else  
      return(null);
  }
  confiIBAN(fg:FormGroup){
    var dni:string = fg.controls['DNI'].value;
    console.log(dni);
    if(dni=='1234'){
      console.log("adelante mi rey");
      return (null);
    }else{
      console.log("cagaste");
      return {confiIBAN:true};
    }
  }
  onSubmit(values){
    console.log(values);
    this.nextPage();
  }
  nextPage(){
    this.navController.navigateForward(['/pagina1',"hola"]);
  }

  
}
