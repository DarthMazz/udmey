import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean;

  constructor() {}

  /**
   * Starts loading
   */
  startLoading(): void {
    this.isLoading = true;
  }

  /**
   * Stops loading
   */
  stopLoading(): void {
    this.isLoading = false;
  }
}
