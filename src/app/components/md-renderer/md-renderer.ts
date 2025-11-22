import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import frontmatter from 'front-matter';
import { Metadata } from '../../models/metadata';

@Component({
  selector: 'app-md-renderer',
  imports: [MarkdownComponent],
  templateUrl: './md-renderer.html',
  styleUrl: './md-renderer.css',
})
export class MdRenderer implements OnInit {
  private readonly http = inject(HttpClient);
  protected metadata?: Metadata;
  protected content: string = '';

  ngOnInit(): void {
    this.http.get('assets/test.md', { responseType: 'text' }).subscribe(text => {
      const file = frontmatter(text);
      this.metadata = file.attributes as Metadata;
      this.content = file.body;
    });
  }
}
