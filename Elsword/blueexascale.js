//number of skills in rotation as series (skill 1, skill 2, skill 3, ... skill n)
//2 cases for cycle effect case "F" and case "R"
//all possible combination of "F" and "R" cases for skill rotation series
  //f(1) = F, R
  //f(next) = f(1) +append F, R
  //repeat for n times
//calculate weight for each combination
  //if case n = F and case (n-1) = F factor (1-reset chance)
  //if case n = F and case (n-1) = R factor (reset chance)
  //etc.
  //repeat for all skills in rotation
  //weight = factor 1 * factor 2 * ... * factor n
  //repeat for all combinations
//calculate double damage for each switch
  //if case n = F and case (n-1) = R, damage of skill n-1 = 2x
  //repeat for all switches
//calculate increased skill dmg for case R
  //if case of skill n = R, damage of skill n = 1.16x
  //repeat for all R cases
//calculate total damage per combination
  //unweighted dmg = skill 1 * dmg modifier + skill 2 * dmg modifier + ... + skill n * dmg modifier
  //weighted dmg = unweighted dmg * weight
//calculate average dmg 
  //(weighted dmg 1 + weighted dmg 2 + ... + weighted dmg n)/(skill dmg 1 + skill dmg 2 + ... + skill dmg n)
  //answer = average dmg increase from resets and resist
  print answer
calculate dmg increase from cda assuming perfect rotation (dont start next rotation first skill until last cooldown has ended)
  normal cooldown
    skill1.cooldown
    vs skill2.cooldown + skill1.casttime
    vs skill3.cooldown + skill2.casttime + skill1.casttime
    etc.
    compare, rotation cooldown = highest time
  cda cooldown
    calculate separately for each f and r case
    if skill 1 = case f then cd = cd/1.2
    etc.
    repeat for each skill
    new cooldown skill 1 
    vs new cooldown skill 2 + cast time skill 1
    etc.
    compare, unweighted rotation cooldown = highest time
  weighted time
    unweighted modified cooldown time * weight +(for each case)/normal rotation cooldown
  average dmg increase
    60/normal time = normal rotations per minute
    60/weighted time = cda rotations per minute
    
    