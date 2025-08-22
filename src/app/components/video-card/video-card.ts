import { Component, Input } from '@angular/core';
import { VideoCardType } from '../../pages/home/home';


@Component({
  selector: 'video-card',
  imports: [],
  templateUrl: './video-card.html',
  styleUrl: './video-card.css'
})


export class VideoCard {
  @Input() card?: any

  @Input() index:number| undefined = undefined

  id = "videoCardModalLabel"+JSON.stringify(this.index)






}
