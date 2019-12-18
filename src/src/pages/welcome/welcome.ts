import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//TODO: REMOVE THIS NAVIGATE, AFTER IMPLEMENTS NAVIGATION FROM PAGES
import { ProfilePage } from '../profile/profile';
import { ErrorsPage } from '../errors/errors';
import { ConfirmPage } from '../confirm/confirm';
import { InstitutionPage } from '../institution/institution';
import { ConfigPage } from '../config/config';
import { CatflowPage } from '../catflow/catflow';
import { AuthPage } from '../auth/auth';

declare var Capacitor
const { WifiEapConfigurator } = Capacitor.Plugins;

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  async configure() {
    let config = await WifiEapConfigurator.configureAP({ssid: "eduroam", username: "emergya@ad.eduroam.no", password: "crocodille", eap: 25, servername: "eduroam.uninett.no", auth: 4, caCertificate: "MIIEbzCCA1egAwIBAgIJAJAhu7l6dg+nMA0GCSqGSIb3DQEBBQUAMEoxCzAJBgNVBAYTAk5PMRMwEQYDVQQKEwpVTklORVRUIEFTMSYwJAYDVQQDEx1VTklORVRUIENlcnRpZmljYXRlIEF1dGhvcml0eTAeFw0xMDAyMDYwMDEyMzBaFw0yMDAyMDQwMDEyMzBaMEoxCzAJBgNVBAYTAk5PMRMwEQYDVQQKEwpVTklORVRUIEFTMSYwJAYDVQQDEx1VTklORVRUIENlcnRpZmljYXRlIEF1dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK2+21jlJLycaCgg6TBo+i37DkWvW4UR3ptLzQAQfBuOSfPBPG9zXhmn0z/gNWfpbAwETiW+2oTcSKz/XJ0Ej1dFnySNWBnNb6rOY7GrTAvkRfDbpacQATPwg9RnvBs4xR+6TGNLcYjcyEnjF+Xd29aRzH/rFkJHq2pM6rT5BpScQ4n1DrB2y+E812UjDYhx8KnD9Zh+83wpa3tMRI5J9n7AuqrBThS4xudCAcJLMyu3KTEnBpRMRfduVyndPTJe+EVcp3XBip41Biza73ZFScqMDFfskc2jT3XV3Tz+0Actg56m+JirRtcQc8lP7o/P6BXTRmIfeXbHuX7/BSE+AXECAwEAAaOCAVYwggFSMB0GA1UdDgQWBBQlxqCOiIgff64MlbIUojA2QgTzTjB6BgNVHSMEczBxgBQlxqCOiIgff64MlbIUojA2QgTzTqFOpEwwSjELMAkGA1UEBhMCTk8xEzARBgNVBAoTClVOSU5FVFQgQVMxJjAkBgNVBAMTHVVOSU5FVFQgQ2VydGlmaWNhdGUgQXV0aG9yaXR5ggkAkCG7uXp2D6cwDAYDVR0TBAUwAwEB/zAbBgNVHREEFDASgRBkcmlmdEB1bmluZXR0Lm5vMDgGA1UdHwQxMC8wLaAroCmGJ2h0dHA6Ly9jYS51bmluZXR0Lm5vL3VuaW5ldHQtY2EtY3JsLnBlbTAzBggrBgEFBQcBAQQnMCUwIwYIKwYBBQUHMAGGF2h0dHA6Ly9vY3NwLnVuaW5ldHQubm8vMBsGA1UdEgQUMBKBEGRyaWZ0QHVuaW5ldHQubm8wDQYJKoZIhvcNAQEFBQADggEBAA9/27nksOl8d7uwi8Ce0u8WOpwDnwUUdYu0/1U91bG+bVxFL/rmenLVJJ9vaU0jxa/xHG2r8Q1RvIz1OqGX8XpbzB9cIB2Bj4kIJ+wg+pHroH9hmhJkf1gxMphtcZL3B2KAAc1B27ZchEJifFJuvL+wghAWVh0iwxhul5JOgDH0cXwvNyjRJjR70uvpU2YmRhNunqhU6hd89HPZpSybq5LU939i5HSnSgAsqQmOSCt0APlJNlJ/y5UWxMBO9ayycIuSHbORBJ8ZnXHw3yScbIEioqvAaDJNQUTNw8Pnn/dq6ffTELCFs/4QBOz7av0IxjnemYuCzgUZmb+YPhYKW+c="})


    await WifiEapConfigurator.connectAP({ssid: "eduroam", config: config})
  }

  // TODO: REMOVE THIS NAVIGATE, AFTER IMPLEMENTS NAVIGATION FROM PAGES
  async navigateTo(page: string) {
    switch (page) {
      case 'profile':
        await this.navCtrl.push(ProfilePage);
        break;
      case 'error':
        await this.navCtrl.push(ErrorsPage);
        break;
      case 'confirm':
        await this.navCtrl.push(ConfirmPage);
        break;
      case 'config':
        await this.navCtrl.push(ConfigPage);
        break;
      case 'institution':
        await this.navCtrl.push(InstitutionPage);
        break;
      case 'catflow':
        await this.navCtrl.push(CatflowPage);
        break;
      case 'auth':
        await this.navCtrl.push(AuthPage);
        break;
    }
  }

}
