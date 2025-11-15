package com.votingApp.votingApplication.service;

import com.votingApp.votingApplication.model.Poll;
import com.votingApp.votingApplication.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PollService {
    @Autowired
    PollRepository pollRepository;

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }
}
