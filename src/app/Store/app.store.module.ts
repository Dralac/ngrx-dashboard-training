import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './reducer';

@NgModule({
  imports: [
    // StoreModule.provideStore(reducer)
    StoreModule.forRoot(reducers, { metaReducers }),
    // new
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule { }
