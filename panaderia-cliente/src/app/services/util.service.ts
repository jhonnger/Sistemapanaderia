import {Injectable} from '@angular/core';
import {LoadingComponent} from '../components/Loading/loading.component';
import {MatDialog} from '@angular/material/dialog';
import { MensajeAlertComponent } from '../components/mensajeAlert/mensaje-alert.component';
import { MensajeExitoComponent } from '../components/mensaje-exito/mensaje-exito.component';
import {MensajeConfirmComponent} from '../components/mensaje-confirm/mensaje-confirm.component';

@Injectable()
export class UtilService {

    dialogRefe: any;
    cantLoading = 0;
    constructor(public dialog: MatDialog) {
    }


    showLoading() {
        const id = 'loading' + this.cantLoading;
        if (this.dialog.getDialogById(id)) {
            this.cantLoading++;
            this.showLoading();
            return;
        }
        setTimeout( () => {
          this.dialogRefe = this.dialog.open(LoadingComponent, {
            id: id,
            disableClose: true
          });
        }, 0);

    }

    alertMensaje(mensaje: string) {
        this.dialog.open(MensajeAlertComponent, {
            id: 'mensaje',
            data: {mensaje}
        });
    }

    showConfirm(mensaje: string, funcion) {
      let dialogRef = this.dialog.open(MensajeConfirmComponent, {
        id: 'mensajeConfirm',
        disableClose: true,
        data: {mensaje}
      });

      dialogRef.afterClosed().subscribe(result => {

        if( result){
          funcion();
        }
      });
    }


    exitoMensaje(mensaje: string) {
        this.dialog.open(MensajeExitoComponent, {
            id: 'exito',
            data: {success: true, mensaje}
        });
    }
    errorMensaje(mensaje: string) {
        this.dialog.open(MensajeExitoComponent, {
            id: 'error',
            data: {success: false, mensaje}
        });
    }

    hideLoading() {
      if(this.dialogRefe === undefined){
        setTimeout(() => {
          this.hideLoading();
        }, 2000);
      } else{
        this.dialogRefe.close();
        if (this.cantLoading > 0) {
          this.cantLoading--;
        }
      }
    }

    cambiarNumeroPuntoPorComa(numero: number) {
        let numeroString: string = numero + '';

        numeroString = numeroString.replace('.', ',');

        console.log(numeroString);
        return parseFloat(numeroString);
    }
    get_browser_info() {
        let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
            }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null)   {return {name: 'Opera', version: tem[1]}; }
            }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {M.splice(1, 1, tem[1]); }
        return {
          name: M[0],
          version: M[1]
        };
     }

     getOS() {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }

        return os;
      }
}
