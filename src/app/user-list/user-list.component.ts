import { Component, OnInit } from '@angular/core'
import { ObservableArray } from '@nativescript/core'
import { UserService } from '../services/user.service'

interface User {
  id: number
  name: string
  profilePicture: string
}

@Component({
  selector: 'app-user-list',
  template: `
    <GridLayout>
      <ListView [items]="users" (itemSwipe)="onSwipe($event)">
        <ng-template let-item="item">
          <GridLayout columns="auto, *">
            <Image [src]="item.profilePicture" width="50" height="50" borderRadius="25"></Image>
            <Label [text]="item.name" col="1" verticalAlignment="center" class="ml-2"></Label>
          </GridLayout>
        </ng-template>
      </ListView>
    </GridLayout>
  `,
})
export class UserListComponent implements OnInit {
  users: ObservableArray<User> = new ObservableArray<User>([])

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users.push(users)
      },
      (error) => {
        console.error('Error fetching users:', error)
      }
    )
  }

  onSwipe(args: any) {
    const user = args.view.bindingContext as User
    const direction = args.direction

    if (direction === 1) { // right swipe
      console.log('Sending friend request to:', user.name)
      // TODO: Implement friend request logic
    } else if (direction === 2) { // left swipe
      console.log('Disliking:', user.name)
      // TODO: Implement dislike logic
    }
  }
}