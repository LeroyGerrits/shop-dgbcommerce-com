import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/Constants';
import { FormatRichTextPipe } from 'src/app/shared/pipes/FormatRichText.pipe';
import { PublicPage } from 'src/app/shared/models/viewmodels/PublicPage.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-page',
  templateUrl: './page.component.html'
})
export class PublicWebsitePageComponent implements OnInit {
  public constants = Constants;

  public page: PublicPage | undefined;
  public pageFormattedContent: string = '';

  constructor(
    private formatRichTextPipe: FormatRichTextPipe,
    private route: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let queryStringPageId = params['pageId'];

      this.utilityService.activePages$.subscribe(pages => {
        if (pages.length > 0 && queryStringPageId) {
          this.page = this.utilityService.getPageById(queryStringPageId);
          if (this.page) {
            this.titleService.setTitle(this.page.Title);
            this.metaService.addTag({ name: 'keywords', content: this.page.Title });
            this.pageFormattedContent = this.formatRichTextPipe.transform(this.page.Content!);
          }
        }
      });
    });
  }
}