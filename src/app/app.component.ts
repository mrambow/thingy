import { Component } from '@angular/core';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'stepper', url: '/stepper', icon: 'mail'},
    {title: 'modals', url: '/modals', icon: 'mail'},
    {title: 'Inbox', url: '/folder/Inbox', icon: 'mail'},
    {title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane'},
    {title: 'Favorites', url: '/folder/Favorites', icon: 'heart'},
    {title: 'Archived', url: '/folder/Archived', icon: 'archive'},
    {title: 'Trash', url: '/folder/Trash', icon: 'trash'},
    {title: 'Spam', url: '/folder/Spam', icon: 'warning'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
  }

  public async doCameraTest() {
    const cameraPermissions = await Camera.checkPermissions();

    console.log('aaaaaaa', cameraPermissions);

    await Camera.pickImages({
      quality: 90,
    });
  }
}
