import { Component } from '@angular/core';
import { FileManagerSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-richtexteditor';
  hostURL : string = 'https://ej2-aspcore-service.azurewebsites.net/';

  fileManagerSettings: FileManagerSettingsModel = {

    enable: true,
    path: '/Pictures',
    ajaxSettings : {
      url: this.hostURL + 'api/FileManager/FileOperations',
      getImageUrl: this.hostURL + 'api/FileManager/GetImage'  
    }
  };

  public customToolbar: Object={
    items: ['FileManager', 'Image']
  };
  

}