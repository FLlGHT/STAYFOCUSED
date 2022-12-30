import {Component, Input} from '@angular/core';
import {Color, COLORS} from "../../models/colors";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  @Input() event: any
  @Input() index : any

  toHoursAndMinutes(totalMinutes: number) {
    let hours = Math.floor(totalMinutes / 60)
    let minutes = (totalMinutes - hours * 60)
    return this.toHours(hours) + this.toMinutes(minutes)
  }

  toHours(hours: number) : string {
    return hours > 0 ? (hours + ' h ') : ''
  }

  toMinutes(minutes: number) : string {
    return minutes > 0 ? minutes + ' min' : ''
  }

  colorInfo(colorId: string) : Color | undefined {
    return COLORS.get(colorId)
  }

  colorStyle(colorId: string) : string {
    let color = this.colorInfo(colorId)
    return "background-color: " + color?.color
  }
}
