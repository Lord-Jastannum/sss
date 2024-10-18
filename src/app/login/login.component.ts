import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { GoogleSignIn } from '@nativescript/google-signin'

@Component({
  selector: 'app-login',
  template: `
    <StackLayout>
      <Button text="Sign in with Google" (tap)="onSignInTap()"></Button>
    </StackLayout>
  `,
})
export class LoginComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  async onSignInTap() {
    try {
      const user = await GoogleSignIn.signIn()
      console.log('Logged in user:', user)
      this.routerExtensions.navigate(['/profile'], { clearHistory: true })
    } catch (error) {
      console.error('Google Sign-In error:', error)
    }
  }
}