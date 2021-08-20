import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private readonly skills: Array<string> =
    ['Angular', 'Full Stack', 'Chrome Extensions', 'Electron', 'WPF', 'C++', 'Unity', 'Shopify', 'Backend', 'Third Party APIs'];

  public getFilterableSkills(): Array<string> {
    return this.skills;
  }

  constructor() { }
}
