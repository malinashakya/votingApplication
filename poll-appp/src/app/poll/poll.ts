import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.html',
  styleUrls: ['./poll.css'],
})
export class PollComponent implements OnInit {
  newPoll: Poll = this.createEmptyPoll();
  polls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.pollService.getPolls().subscribe({
      next: (data) => this.polls = data,
      error: (error) => console.error("Error:", error)
    });
  }

  createPoll(): void {
    if (!this.newPoll.question.trim()) {
      alert('Please enter a question');
      return;
    }

    this.pollService.createPoll(this.newPoll).subscribe({
      next: (poll) => {
        this.polls.push(poll);
        this.newPoll = this.createEmptyPoll();
      },
      error: (error) => console.error("Error:", error)
    });
  }

  vote(poll: Poll, optionIndex: number): void {
    poll.options[optionIndex].voteCount++;
  }

  addOption(): void {
    this.newPoll.options.push({ optionText: '', voteCount: 0 });
  }

  removeOption(index: number): void {
    if (this.newPoll.options.length > 2) {
      this.newPoll.options.splice(index, 1);
    }
  }

  private createEmptyPoll(): Poll {
    return {
      question: '',
      options: [
        { optionText: '', voteCount: 0 },
        { optionText: '', voteCount: 0 }
      ]
    };
  }
}