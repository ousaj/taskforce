package com.taskforce.rwstaskforce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.taskforce.rwstaskforce.api.TaskForceAPI;
import com.taskforce.rwstaskforce.models.Task;
import com.taskforce.rwstaskforce.repositories.TaskRepository;

@RestController
public class TaskForceController implements TaskForceAPI {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void createTask(Task task) {
        if (task == null) {
            return;
        }

       taskRepository.saveAndFlush(task);
    }

    @Override
    public List<Task> getTasks() {
       return taskRepository.getTasks();
    }

    @Override
    public void updateTask(Task task) {
        if (task == null) {
            return;
        }

        taskRepository.saveAndFlush(task);
    }

    @Override
    public void deleteTask(Long id) {
        if (id == null) {
            return;
        }

        taskRepository.deleteById(id);
    }

    @Override
    public String test() {
        return "this is a test";
    }
}
