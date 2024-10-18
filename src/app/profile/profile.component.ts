import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-profile',
  template: `
    <StackLayout>
      <Label text="Profile"></Label>
      <TextField [(ngModel)]="name" hint="Enter your name"></TextField>
      <Button text="Save Profile" (tap)="saveProfile()"></Button>
      <Button text="Go to User List" (tap)="goToUserList()"></Button>
    </StackLayout>
  `,
})
export class ProfileComponent implements OnInit {
  name: string = ''
  userId: number = 1 // This should be set after successful login

  constructor(
    private routerExtensions: RouterExtensions,
    private userService: UserService
  ) {}

  ngOnInit() {
    // TODO: Load user profile data
  }

  saveProfile() {
    this.userService.updateUser(this.userId, { name: this.name }).subscribe(
      (response) => {
        console.log('Profile updated:', response)
      },
      (error) => {
        console.error('Error updating profile:', error)
      }
    )
  }

  goToUserList() {
    this.routerExtensions.navigate(['/users'])
  }
}