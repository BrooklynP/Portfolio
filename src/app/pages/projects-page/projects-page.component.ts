import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from 'src/app/portfolioData/projects-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsDataService } from 'src/app/skillsData/skills-data.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public projects: Array<any>;
  public skillsToFilterBy: Array<string>;
  public currentFilter = 'all';
  private clearProjectTimeout: NodeJS.Timer;

  public showRightPanel = false;
  public selectedProject = {
    index: -1,
    name: "",
    summary: "",
    skills: [],
    screenshots: [],
    skillToFilterBy: "",
    githubLink: null,
    link: null,
    desc: null
  };
  public currentScreenshot = 0

  constructor(public projectsService: ProjectsDataService, private route: ActivatedRoute, public router: Router, public skillsDataService: SkillsDataService) {
    this.projects = projectsService.getProjects();
    this.skillsToFilterBy = this.skillsDataService.getFilterableSkills();
  }

  ngOnInit() {
    this.route.params.forEach((param) => {
      const ProjectID = parseInt(param.uid, 10)
      if (ProjectID <= this.projects.length - 1 && ProjectID > -1) {
        this.selectProject(ProjectID, ProjectID);
      }
    });
  }


  nextScreenshot() {
    if (this.currentScreenshot === this.selectedProject.screenshots.length - 1) {
      this.currentScreenshot = 0;
    } else {
      this.currentScreenshot++;
    }
  }

  previousScreenshot() {
    if (this.currentScreenshot === 0) {
      this.currentScreenshot = this.selectedProject.screenshots.length - 1;
    } else {
      this.currentScreenshot--;
    }
  }

  selectScreenshot(index: number) {
    this.currentScreenshot = index;
  }

  getSelectedClass(skillName: string): boolean {
    return skillName === this.currentFilter;
  }

  selectProject(index: number, trueIndex: number) {
    if(screen.availWidth <= 800){
      this.router.navigate(['/project', trueIndex]);
      return
    }

    clearTimeout(this.clearProjectTimeout);
    this.currentScreenshot = 0;
    this.showRightPanel =  true
    this.selectedProject = this.projects[index];
    console.log(this.selectedProject);
    scrollTo({top: 0, behavior: 'smooth'})
  }

  selectFilter(filterBy: string) {
    this.currentFilter = filterBy;
    if (filterBy === 'all') {
      this.projects = this.projectsService.getProjects();
      return;
    }

    this.projects = this.projectsService.getProjects().filter(project => {
      return project.skillsToFilterBy.includes(this.currentFilter);
    });
  }

  deselectProject(){
    this.showRightPanel = false;
    this.clearProjectTimeout = setTimeout(() => {
      this.selectedProject = {
        index: -1,
        name: "",
        summary: "",
        skills: [],
        screenshots: [],
        skillToFilterBy: "",
        githubLink: null,
        link: null,
        desc: null
      };
    }, 2000);

  }
}
