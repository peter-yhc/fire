package org.pyhc.fire.income.payroll;

import com.google.gson.Gson;
import org.pyhc.fire.income.MonthlyIncomeEntry;
import org.pyhc.fire.income.MonthlyIncomeNotFoundException;
import org.pyhc.fire.income.MonthlyIncomePort;
import org.pyhc.fire.model.IdentityResponse;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;

@RestController
@RequestMapping(value = "/api/income")
public class MonthlyIncomeController {

    @Autowired
    private Gson gson;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    @Autowired
    private MonthlyIncomePort monthlyIncomePort;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getMonthlyIncome(@RequestParam(value = "year") String year, @RequestParam(value = "month") String month) {
        MonthlyIncomeEntry monthlyIncomeEntry = monthlyIncomePort.findByPayPeriod(String.join("-", year, month));
        databaseIdentityObfuscatorPort.hideId(monthlyIncomeEntry);
        return ResponseEntity.ok().contentType(APPLICATION_JSON_UTF8).body(gson.toJson(monthlyIncomeEntry));
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addMonthlyIncome(@RequestBody MonthlyIncomeEntry monthlyIncomeEntry) {
        String id = monthlyIncomePort.addEntry(monthlyIncomeEntry);
        return ResponseEntity.accepted().body(new IdentityResponse(id));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateMonthlyIncome(@PathVariable("id") String id, @RequestBody MonthlyIncomeEntry monthlyIncomeEntry) {
        try {
            id = monthlyIncomePort.update(id, monthlyIncomeEntry);
        } catch (MonthlyIncomeNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().contentType(APPLICATION_JSON_UTF8).body(new IdentityResponse(id));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteMonthlyIncome(@PathVariable("id") String id) {
        monthlyIncomePort.delete(id);
        return ResponseEntity.ok().build();
    }
}
