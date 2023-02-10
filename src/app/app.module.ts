import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutMeComponent } from './about-me/about-me.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { HeaderComponent } from './share/components/header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return `___ MissingResource: "${params.key}" ___`;
    }
}

export const components = [HeaderComponent, FooterComponent, AboutMeComponent, PersonalInfoComponent, SkillsComponent, WorkExperienceComponent];

export const modules = [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
        },
        defaultLanguage: getDefaultLanguage(),
        missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
        useDefaultLang: true,
    }),
];

@NgModule({
    declarations: [AppComponent],
    imports: [modules, components],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

function getDefaultLanguage(): string {
    const supportedLanguages = ['en', 'es'],
        defaultLanguage = supportedLanguages.find((x) => x !== undefined),
        languageOverride = document.location.pathname
            .split('/')
            ?.filter((x) => !String.isNullOrEmpty(x))
            ?.find((x) => x !== undefined),
        browserLanguage = <string>navigator.language.split('-').find((x) => x !== undefined) ?? defaultLanguage,
        language =
            <string>supportedLanguages.find((x) => languageOverride?.indexOf(x) !== -1) ??
            <string>supportedLanguages.find((x) => browserLanguage?.indexOf(x) !== -1) ??
            defaultLanguage;

    if (supportedLanguages.find((x) => x === languageOverride)) {
        window.history.replaceState(window.history.state, '', document.location.pathname.replace(`/${languageOverride}`, ''));
    }
    return language;
}
