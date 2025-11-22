import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-md',
  imports: [],
  templateUrl: './test-md.html',
  styleUrl: './test-md.css',
})
export class TestMd {
  @Input() data?: string;
}
