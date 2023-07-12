import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';

import { BasicComponent } from './basic/basic.component';
import { ElementsComponent } from './elements/elements.component';
import { ImageComponent } from './image/image.component';
import { LinkComponent } from './link/link.component';
import { TableComponent } from './table/table.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CodeComponent } from './code/code.component';
import { SymbolComponent } from './symbol/symbol.component';
import { FormsComponent } from './forms/forms.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { LayoutComponent } from './layout/layout.component';
import { Table2Component } from './table2/table2.component';
import { ListComponent } from './list/list.component';
import { ClassesComponent } from './classes/classes.component';
import { IdComponent } from './id/id.component';
import { Layout1Component } from './layout1/layout1.component';
import { Form4Component } from './form4/form4.component';
import { GraphicComponent } from './graphic/graphic.component';

import { CssSelectorComponent } from './css-selector/css-selector.component';
import { CssBasicComponent } from './css-basic/css-basic.component';
import { Image1Component } from './image1/image1.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { Text1Component } from './text1/text1.component';
import { FontComponent } from './font/font.component';
import { IconComponent } from './icon/icon.component';
import { OverflowComponent } from './overflow/overflow.component';
import { FloatComponent } from './float/float.component';
import { DisplayComponent } from './display/display.component';
import { AlignComponent } from './align/align.component';
import { OpacityComponent } from './opacity/opacity.component';
import { NavComponent } from './nav/nav.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Form8Component } from './form8/form8.component';
import { RFormComponent } from './r-form/r-form.component';
import { CounterComponent } from './counter/counter.component';
import { WebsiteComponent } from './website/website.component';
import { TransformComponent } from './transform/transform.component';
import { TransitionComponent } from './transition/transition.component';
import { AnimationComponent } from './animation/animation.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { StyleImageComponent } from './style-image/style-image.component';
import { OverlayComponent } from './overlay/overlay.component';
import { Overlay1Component } from './overlay1/overlay1.component';
import { Overlay2Component } from './overlay2/overlay2.component';
import { Overlay4Component } from './overlay4/overlay4.component';
import { FlipImageComponent } from './flip-image/flip-image.component';
import { ButtonComponent } from './button/button.component';
import { Buton1Component } from './buton1/buton1.component';
import { UiComponent } from './ui/ui.component';
import { BoxSizingComponent } from './box-sizing/box-sizing.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { Media1Component } from './media1/media1.component';
import { FlexComponent } from './flex/flex.component';
import { Media2Component } from './media2/media2.component';
import { Media3Component } from './media3/media3.component';
import { Media4Component } from './media4/media4.component';
import { Flex2Component } from './flex2/flex2.component';
import { FlexResponsiveComponent } from './flex-responsive/flex-responsive.component';
import { Responsive1Component } from './responsive1/responsive1.component';
import { RwdGridComponent } from './rwd-grid/rwd-grid.component';
import { MqComponent } from './mq/mq.component';
import { Mq1Component } from './mq1/mq1.component';
import { Mq2Component } from './mq2/mq2.component';
import { BreakPointComponent } from './break-point/break-point.component';
import { RwdImgComponent } from './rwd-img/rwd-img.component';
import { VideoComponent } from './video/video.component';
import { GridComponent } from './grid/grid.component';
import { Grid1Component } from './grid1/grid1.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { Grid4Component } from './grid4/grid4.component';
import { Grid5Component } from './grid5/grid5.component';
import { Grid7Component } from './grid7/grid7.component';
import { Grid8Component } from './grid8/grid8.component';
import { Grid9Component } from './grid9/grid9.component';
import { Grid10Component } from './grid10/grid10.component';
import { Basic1Component } from './basic1/basic1.component';
import { SpaceComponent } from './space/space.component';
import { RrComponent } from './rr/rr.component';
import { VvComponent } from './vv/vv.component';

import { JavaScript1Component } from './java-script1/java-script1.component';
import { JsStyleComponent } from './js-style/js-style.component';
import { HeadScriptComponent } from './head-script/head-script.component';

// import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    
    BasicComponent,
    
    ElementsComponent,
    
    ImageComponent,
    
    LinkComponent,
    
    TableComponent,
    
    ResponsiveComponent,
    
    CodeComponent,
    
    SymbolComponent,
    
    FormsComponent,
    
    Form1Component,
    
    Form2Component,
    
    Form3Component,
    
    LayoutComponent,
    
    Table2Component,
    
    ListComponent,
    
    ClassesComponent,
    
    IdComponent,
    
    Layout1Component,
    
    Form4Component,
    
    GraphicComponent,
    
  
    
    CssSelectorComponent,
    
    CssBasicComponent,
    
    Image1Component,
    
    BoxModelComponent,
    
    Text1Component,
    
    FontComponent,
    
    IconComponent,
    
    OverflowComponent,
    
    FloatComponent,
    
    DisplayComponent,
    
    AlignComponent,
    
    OpacityComponent,
    
    NavComponent,
    
    DropdownComponent,
    
    GalleryComponent,
    
    Form8Component,
    
    RFormComponent,
    
    CounterComponent,
    
    WebsiteComponent,
    
    TransformComponent,
    
    TransitionComponent,
    
    AnimationComponent,
    
    TooltipComponent,
    
    StyleImageComponent,
    
    OverlayComponent,
    
    Overlay1Component,
    
    Overlay2Component,
    
    Overlay4Component,
    
    FlipImageComponent,
    
    ButtonComponent,
    
    Buton1Component,
    
    UiComponent,
    
    BoxSizingComponent,
    
    MediaQueriesComponent,
    
    Media1Component,
    
    FlexComponent,
    
    Media2Component,
    
    Media3Component,
    
    Media4Component,
    
    Flex2Component,
    
    FlexResponsiveComponent,
    
    Responsive1Component,
    
    RwdGridComponent,
    
    MqComponent,
    
    Mq1Component,
    
    Mq2Component,
    
    BreakPointComponent,
    
    RwdImgComponent,
    
    VideoComponent,
    
    GridComponent,
    
    Grid1Component,
    
    GridItemComponent,
    
    Grid4Component,
    
    Grid5Component,
    
    Grid7Component,
    
    Grid8Component,
    
    Grid9Component,
    
    Grid10Component,
    
    Basic1Component,
    
    SpaceComponent,
    
    RrComponent,
    
    VvComponent,
    
    JavaScript1Component,
    
    JsStyleComponent,
    
    HeadScriptComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
