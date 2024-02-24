package com.taskforce.rwstaskforce.api;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.taskforce.rwstaskforce.models.Task;

public interface TaskForceAPI {

    @PostMapping(value = "/createTask")
    public void createTask();

    @GetMapping(value = "/getTasks")
    public List<Task> getTasks();

    @PatchMapping(value = "/updateTask")
    public void updateTask();

    @DeleteMapping(value = "/deleteTask")
    public void deleteTask();

    @GetMapping(value = "/test")
    public String test();
}
