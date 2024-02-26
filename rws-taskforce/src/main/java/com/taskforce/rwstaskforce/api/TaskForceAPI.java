package com.taskforce.rwstaskforce.api;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.taskforce.rwstaskforce.models.Task;

@CrossOrigin(origins = "http://localhost:4200")
public interface TaskForceAPI {

    @PostMapping(value = "/createTask")
    public void createTask(@RequestBody Task task);

    @GetMapping(value = "/getTasks")
    public List<Task> getTasks();

    @PutMapping(value = "/updateTask")
    public void updateTask(@RequestBody Task task);

    @DeleteMapping(value = "/deleteTask")
    public void deleteTask(@RequestParam Long id);

    @GetMapping(value = "/test")
    public String test();
}
