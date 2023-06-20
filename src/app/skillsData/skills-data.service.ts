import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private readonly skills: Array<string> =
    ['Angular', 'React', 'SQL', 'JavaScript','Third Party APIs','PWA', 'VB.NET', 'Chrome Extensions', 'Electron', 'WPF', 'C++', 'Unity', 'Shopify'];

  public getFilterableSkills(): Array<string> {
    return this.skills;
  }

  constructor() { }
}
