package hu.prf.kotprog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.prf.kotprog.models.Termek;
import hu.prf.kotprog.models.TermekService;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TermekController {
    TermekService termekService;

    @Autowired
    public TermekController(TermekService termekService) {
        this.termekService = termekService;
    }


    @PostMapping(path="/termek", consumes = "application/json")
    public String newTermek(@RequestBody Termek termek){
        try {
            this.termekService.addTermek(termek);
            return "Success.";
        } catch (Exception e) {
            System.out.println(e);
            return "Error during object creation.";
        }
    }

    @DeleteMapping(path="/termek")
    public String deleteTermek(@RequestBody int id){
        try {
            this.termekService.deleteTermekById(id);
            return "Successfully deletion";
        } catch (Exception e){
            System.out.println(e);
            return "Error during deletion";
        }
    }

    @GetMapping("/termekek")
    public List<Termek> getAllTermek(){
        try {
            return this.termekService.getAllTermek();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    
    
}
