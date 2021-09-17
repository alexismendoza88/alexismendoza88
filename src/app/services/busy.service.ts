import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {LoadingController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BusyService {

  constructor(public actionSheetController: ActionSheetController,private alertCtrl: AlertController,private loading:LoadingController) { }

  presentAlert(title:string,message:string) {
    this.alertCtrl.create({     
          header: title,
          subHeader: '',
          message: message,
          buttons: ['Aceptar']
        }).then(alert=> alert.present());
      
      } 
      async AceptInfo(title:string,message:string) {
        return new Promise(async (resolve) => {
        const alert = await this.alertCtrl.create({     
              header: title,
              subHeader: '',
              message: message,
              buttons: [
                {
                  text: 'Aceptar',
                  handler: () => {
                    return resolve(true);
                  }
                }
              ]
            });
            await  alert.present();
          });
        }
       async presentAlertYesNo(title:string,message:string) {
        return new Promise(async (resolve) => {
        const alert = await this.alertCtrl.create({     
              header: title,
              subHeader: '',
              message: message,
              buttons: [
                   
                {
                  text: 'No',
                  role: 'cancel',
                  handler: () => {
                    return resolve(false);
                  }
                },
                {
                  text: 'Si',
                  handler: () => {
                    return resolve(true);
                  }
                }
              ]
            });
            await  alert.present();
          });
       
          } 
      presentProAlert() {
       return this.loading.create({
        message: "Por favor, espere..."
        
        });      
     }

     presentProAlert2(ms:string) {
      return this.loading.create({
       message: ms
       
       });      
    }
    async presentActionSheet() {
      return new Promise(async (resolve) => {
      const actionSheet = await this.actionSheetController.create({
        header: '¿Que desea?',
        buttons: [{
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            return resolve("E");
          }
        }, {
          text: 'Cambiar',
          icon: 'image',
          handler: () => {
            return resolve("C");
          }
        }, {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            return resolve("V");
          }
        }, {
          text: 'Cerrar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            return resolve("S");
          }
        }]
      });
      await actionSheet.present();
    });
    }  
}
