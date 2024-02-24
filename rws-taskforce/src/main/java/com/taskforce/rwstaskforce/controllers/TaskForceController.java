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
    public void createTask() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createTask'");
    }

    @Override
    public List<Task> getTasks() {
       return taskRepository.getTasks();
    }

    @Override
    public void updateTask() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateTask'");
    }

    @Override
    public void deleteTask() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteTask'");
    }

    @Override
    public String test() {
        return "this is a test";
    }
}
