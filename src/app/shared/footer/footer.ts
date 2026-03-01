import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
}
