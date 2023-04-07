import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {}

function onDragStart(event: any) {
  event.dataTransfer.setData('text/plain', event.target.id);

  event.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event: any) {
  event.preventDefault();
}

function onDrop(event: any) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}
