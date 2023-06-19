package com.example.project.respositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Conmodule;

public interface Conrepo extends JpaRepository<Conmodule, String> {

}
