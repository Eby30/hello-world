import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  studentName: string = 'Eby';

  profileImage: string = 'assets/images/student.webp';

  favoriteSubject: string = '';

  showMessage() {
    alert('Profile viewed!');
  }
}