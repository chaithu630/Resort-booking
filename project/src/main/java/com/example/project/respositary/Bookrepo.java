package com.example.project.respositary;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.module.Bookmodule;

public interface Bookrepo extends JpaRepository<Bookmodule,Integer> {

	List<Bookmodule> findByuser(String uname);

}
