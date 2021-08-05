import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private readonly skills: Array<string> = ['Angular', 'Full Stack', 'Chrome Extensions','Electron', 'WPF', 'C++', 'Unity', 'Shopify', 'APIs'];

  public getFilterableSkills(): Array<string> {
    return this.skills;
  }

  constructor() { }
}
