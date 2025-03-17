import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    TechStackComponent,
    ExperienceComponent,
    ProjectShowcaseComponent,
    BlogPostsComponent,
    FooterComponent,
    CertificatesComponent,
    EducationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
