import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";
import { MainComponent } from "./main/main.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GalleryComponent } from "./gallery/gallery.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "blog",
    component: MainComponent,
    data: { animation: "blog" }
  },
  {
    path: "wedding",
    component: MainComponent,
    data: { wedding: true }
  },
  {
    path: "tvc",
    component: MainComponent,
    data: { tvc: true }
  },
  {
    path: "commercial",
    component: MainComponent,
    data: { commercial: true }
  },
  {
    path: "bts",
    component: MainComponent,
    data: { bts: true }
  },
  {
    path: "music",
    component: MainComponent,
    data: { music: true }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "contact" }
  },
  {
    path: "gallery",
    component: GalleryComponent
  }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContactComponent, MainComponent, GalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
