package kr.hs.dgsw.shopping_back.Domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class User {
    private Long id;
    private String account;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String username;
    private String tel;
    private String phone;
    private String zipCode1;
    private String zipCode2;
    private String address;
    private String email;
    private int mileage;
    private LocalDateTime created;
    private LocalDateTime updated;
}
