import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgNMocksModule } from 'ngn-mocks';
import { TEST_MOCK, TEST_MOCK2 } from './mocks';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        NgNMocksModule.forRoot([TEST_MOCK, TEST_MOCK2]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
