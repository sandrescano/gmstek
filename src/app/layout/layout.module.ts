import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ControlsComponent } from './transactions/table/controls/controls.component';
import { ExpandableComponent } from './transactions/table/expandable/expandable.component';
import { MerchantsComponent } from './transactions/table/expandable/merchants/merchants.component';
import { HistoryComponent } from './transactions/table/expandable/history/history.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { HeaderComponent } from './header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from './transactions/table/table.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    LayoutComponent,    
    HeaderComponent, 
    TransactionsComponent, 
    DashboardComponent, 
    TableComponent, 
    ControlsComponent, 
    ExpandableComponent, 
    MerchantsComponent, 
    HistoryComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzSpinModule,
    NzAvatarModule,
    NzDividerModule,
    NzSpaceModule,
    NzGridModule,
    NzTypographyModule,
    NzIconModule,
    NzBadgeModule,
    NzInputModule,
    NzCardModule,
    NzTabsModule,
    NzEmptyModule,
    NzButtonModule,
    NzTableModule,
    NzSwitchModule,
    NzRadioModule,
    NzFormModule,
    NzCarouselModule,
    NzImageModule
  ],
  exports:[
    HeaderComponent,
    TransactionsComponent,
    DashboardComponent,
    TableComponent,
    ControlsComponent,
    ExpandableComponent,
    MerchantsComponent,
    HistoryComponent
  ]  
})
export class LayoutModule { }
