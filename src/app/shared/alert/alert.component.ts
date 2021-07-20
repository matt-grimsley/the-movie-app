// import {
//     Component,
//     EventEmitter,
//     Input,
//     OnDestroy,
//     OnInit,
//     Output,
//     ViewChild
// } from '@angular/core';
// import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
// import { Subject } from 'rxjs';
// import {debounceTime} from 'rxjs/operators';

// @Component({
//     selector: 'app-alert',
//     templateUrl: './alert.component.html',
//     styleUrls: ['./alert.component.scss']
// })
// export class AlertComponent implements OnInit, OnDestroy {
//     @Input() message: string;
//     @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;
//     private _messageSub = new Subject<string>();

//     ngOnInit(): void {
//       this._messageSub.subscribe((message) => this.message = message);
//       this._messageSub.pipe(debounceTime(3000)).subscribe(() => {
//         if (this.selfClosingAlert) {
//           this.selfClosingAlert.close();
//         }
//       });
//     }

//     ngOnDestroy(): void {
//         if (this._messageSub) {
//             this._messageSub.unsubscribe();
//         }
//     }

// }

import { Component, Input } from '@angular/core';

interface Alert {
    type: string;
    message: string;
}

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {
    @Input() type: string;
    @Input() message: string;

    show = false;

    constructor() {
      this.show=true;
    }

    reset() {
        this.show = false;
    }
}
