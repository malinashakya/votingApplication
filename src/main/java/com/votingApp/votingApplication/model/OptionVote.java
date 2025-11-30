package com.votingApp.votingApplication.model;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class OptionVote {
    private String optionText;
    private Long voteCount = 0L;

    public OptionVote(String optionText, Long voteCount){
        this.optionText = optionText;
        this.voteCount = voteCount;
    }
}
