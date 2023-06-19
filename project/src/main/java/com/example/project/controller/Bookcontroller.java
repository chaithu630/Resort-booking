package com.example.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.module.Bookmodule;
import com.example.project.respositary.Bookrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/booking")
public class Bookcontroller {
	
	@Autowired
	Bookrepo repo;
	
	@PostMapping("/posting")
	public String pos(@RequestBody Bookmodule d) {
		repo.save(d);
		return "Booking succes";
	}
	
	
	@GetMapping("/bookdata/{uname}")
	List<Bookmodule> getd(@PathVariable String uname){
		List<Bookmodule> ll=repo.findByuser(uname);
		return ll;
	}

}
