import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdRenderer } from "./components/md-renderer/md-renderer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MdRenderer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('markdown-demo-video');
}
