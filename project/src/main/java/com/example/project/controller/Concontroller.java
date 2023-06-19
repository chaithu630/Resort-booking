package com.example.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.module.Conmodule;
import com.example.project.respositary.Conrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/cont")
public class Concontroller {
	
	@Autowired
	Conrepo repo;
	
	
	@PostMapping("/postdataaa")
	public String con(@RequestBody Conmodule d)
	{
		repo.save(d);
		return "we will contact you soon!!!";
	}


}
