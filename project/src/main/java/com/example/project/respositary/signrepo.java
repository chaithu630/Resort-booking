package com.example.project.respositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Signmodule;

public interface signrepo extends JpaRepository<Signmodule, Integer>  {

	Signmodule findByUsername(String mname);

	

}
